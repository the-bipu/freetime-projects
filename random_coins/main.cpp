// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BIPANSHU KUMAR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

// ********************************************************** HEADER FILE **********************************************************//

#include<bits/stdc++.h>
using namespace std;
// #include<iostream>
// #include<cmath>
// #include<string>
// #include<vector>
// #include<map>
// #include<set>
// #include<stack>
// #include<algorithm>
// #include<array>
// #include<queue>
// #include<climits>
// #include<cstddef>
// #include<cstdio>
// #include<cstdlib>
// #include<chrono>
// #include<random>
// #include<cassert>
// #include<bitset>
// #include<complex>
// #include<cstring>
// #include<functional>
// #include<iomanip>
// #include<numeric>
// #include<utility>
// #include<string_view>

// ********************************************************** LEARNING PURPOSE **********************************************************//

// abs() is used for the absolute value of a number
// sort() inbuilt function in cpp
// swap() function in c++ used to swap value of two elements of the same data type.
// toupper() This function is used for converting a lowercase character to uppercase.
// tolower() This function is used for converting an uppercase character to lowercase.
// ceil() and floor() function
// vector<ll> vect(arr, arr+n) used to make a vector containg same elements as that of the array arr
// sort(vect.begin(),vect.end(), greater<int>());
// sort(arr,arr+n, greater<ll>()) sort in the decreasing order
// reverse(vect.begin(), vect.end());
// reverse(arr,arr+n);
// accumulate(first_iterator, last_iterator, initial value of sum) – Does the summation of vector elements eg: accumulate(arr,arr+n,0) will give summation of the array
// count(first_iterator, last_iterator,x) – To count the occurrences of x in vector.
// find(first_iterator, last_iterator, x) – Returns an iterator to the first occurrence of x in vector and points to last address of vector ((name_of_vector).end()) if element is not present in vector
// find(vect.begin(), vect.end(),5) != vect.end()?
//                      cout << "Element found":
//                      cout << "Element not found";


// ********************************************************** SHORT CUTS **********************************************************//

#define ll long long
#define ld long double
#define ull unsigned long long int
#define vi vector<int>
#define vll vector<long long>
#define pii pair<int, int>
#define pll pair<long long, long long>
#define mii map<int, int>
#define mll map<long long, long long>
#define si set<int>
#define sc set<char>
#define MOD 10000000007
#define yep cout<<"YES"<<endl;
#define nope cout<<"NO"<<endl;


// ********************************************************** LOOP SORT **********************************************************//
#define asort(arr) sort(arr,arr+n)
#define dsort(arr) sort(arr,arr+n,greater<ll>())
#define inpvec1(i, n) for(int i=0; i<n; i++){long long x; cin>> x; v1.push_back(x)}
#define printvec1(i, n) for(int i=0; i<n; i++){cout<< v[i] << " "}


// ******************************************************** FUNCTION **********************************************************//

// bool prime(ll n){for(int i=2;i*i<=n;i++){if(n%i==0){return false;}}return true;}
// void seive(){seiv[0]=0;seiv[1]=1;for(ll i=2;i*i<1000001;i++){if(seiv[i]==0){seiv[i]=i;for(ll j=i*i;j<1000001;j=j+i){if(seiv[j]==0){seiv[j]=i;}}}}}
// ll gcd(ll a,ll b){if(b==0){return a;}if(a>b){return gcd(b,a%b);}else{return gcd(b,a);}}

void solve_single();
void solve_mul();
void solutioN();

void solve_single()
{
    ll n;
    cin>>n;
}

void solve_mul()
{
    ll test;
    cin>>test;
    while (test--)
    {
    solutioN();
    }
}


// ******************************************************** THINGS OF MY BUSINESS **********************************************************//

void solutioN()
{
    ll n; cin>> n;
    
}
int main()
{
    // solve_mul();
    //solve_single();

    // int n = 2;
    ll rand_num;
    srand(time(0));
    // for(int i=0; i<=1; i++){
    // }
    rand_num = ((double)rand()) / RAND_MAX << endl;

    cout<<rand_num<<endl;

    if(rand_num == 0){
        cout<<"Tails"<<endl;
    }
    else{
        cout<<"Heads"<<endl;
    }

}