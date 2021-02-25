#include<iostream>

using namespace std; 
void printUnique(int l, int r) 
{ 
    for (int i=l ; i<=r ; i++) 
    { 
        int num = i; 
        //bool visited[10] = {false};
        vector<bool> visited;
        for(int i=0;i<9;i++)
        {
            bool val=false;
            visited.push_back(val);
        }
        while (num) 
        { 
            if (visited[num % 10]) 
                break; 
  
            visited[num%10] = true; 
  
            num = num/10; 
        } 
 
        if (num == 0) 
            cout << i << " "; 
    } 
} 

int main() 
{ 
    int l = 1, r = 20; 
    printUnique(l, r); 
    return 0; 
} 