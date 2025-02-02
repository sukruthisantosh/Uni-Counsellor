#include <iostream>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <netinet/ip.h>
#include <unistd.h>
#include "nlohmann/json.hpp"
#include <cstdlib>
#include <curl/curl.h>
// using namespace std;
using json = nlohmann::json;


// GET 127.1.1.1:9999/get_colleges payload = {result of the form} -> result 

//

size_t write_callback(void* contents, size_t size, size_t nmemb, void* userp) {
    std::string* response = static_cast<std::string*>(userp);
    response->append(static_cast<char*>(contents), size * nmemb);
    return size * nmemb;
}


int main() {
    int fd = socket(AF_INET, SOCK_STREAM, 0);
    if(fd == -1) {
        std::cout << "Can't create server\n";
        exit(-1);
    }
    sockaddr_in sockaddr;
    sockaddr.sin_family = AF_INET;
    sockaddr.sin_addr.s_addr = inet_addr("127.0.0.1");
    sockaddr.sin_port = htons(9999);

    int j = bind(fd, (struct sockaddr*) &sockaddr, sizeof(sockaddr));
    if(j < 0) {
        std::cout << "JCan't bind on port 9999\n";
        exit(-1);
    }

    if(listen(fd, 1) < 0) {
        std::cout << "Can't to liste\n";
        exit(-1);
    }
    auto WLEN = sizeof(sockaddr);
    int fd2 = accept(fd, (struct sockaddr *) &sockaddr, (socklen_t *) &(WLEN));

    char arr[100];
    std::string h;
    size_t bRead = 0;
    while((bRead = read(fd2, arr, sizeof(arr) - 1)) > 0) {
        arr[bRead] += '\0';
        h += arr;
        if(h.find('\n') != std::string::npos) {
            break;
        }
    }


    nlohmann::json w;
    w = nlohmann::json::parse(h.substr(0, h.find('\n')));
    std::cout << w.dump(4) << std::endl;
    
    std::string D_API_KEY = std::getenv("CLAUDE_API_KEY");
    CURL *g = curl_easy_init();
    if(!g) {
        std::cout << "hehe jmao\n";
        exit(-1);
    }

    CURLcode js;
    curl_easy_setopt(g, CURLOPT_URL, "https://api.anthropic.com/v1/messages");
    

    std::string api_key_header = "x-api-key: " + D_API_KEY;
    struct curl_slist *headers = nullptr;
    headers = curl_slist_append(headers, api_key_header.c_str());
    headers = curl_slist_append(headers, "anthropic-version: 2023-06-01");
    headers = curl_slist_append(headers, "content-type: application/json");


    curl_easy_setopt(g, CURLOPT_HTTPHEADER, headers);

    // Build the JSON payload.
    json r;
    r["model"] = "claude-3-5-sonnet-20241022";
    r["max_tokens"] = 1024; 
    std::string content = "Give me a list of 20 colleges (universities) using this data submitted by a user, give me the names and descriptions of each university (around 2 to 3 lines) in JSON Format only i dont want anything else please! " + w.dump();
    // Set up the messages as an array of objects
    r["messages"] = json::array();
    r["messages"].push_back({ {"role", "user"}, {"content", content} });
    
    std::string payload = r.dump();
    std::cout << "Sending payload:\n" << payload << std::endl;

    // Set the payload as POST data
    curl_easy_setopt(g, CURLOPT_POSTFIELDS, payload.c_str());

    std::string response_string;
    curl_easy_setopt(g, CURLOPT_WRITEFUNCTION, write_callback);
    curl_easy_setopt(g, CURLOPT_WRITEDATA, &response_string);


    CURLcode res = curl_easy_perform(g);
    if(res != CURLE_OK) {
        std::cerr << "curl_easy_perform() failed: " 
                  << curl_easy_strerror(res) << "\n";
    } else {
        std::cout << "Response from API:\n" << json::parse(response_string)["content"][0]["text"] << "\n";
    }

    send(fd2, json::parse(response_string)["content"][0]["text"].dump().c_str(), json::parse(response_string)["content"][0]["text"].dump().size(), 0);
    
    /*
    curl https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data \
    '{
        "model": "claude-3-5-sonnet-20241022",
        "max_tokens": 1024,
        "messages": [
            {"role": "user", "content": "Hello, world"}
        ]
    }'
    */

    close(fd2);
    close(fd);



    return 0;
}