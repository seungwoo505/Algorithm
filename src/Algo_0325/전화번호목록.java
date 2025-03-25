package Algo_0325;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class 전화번호목록 {
    static class TrieNode{
        Map<Character, TrieNode> trie = new HashMap<>();
        boolean isEnd;
    }

    static class Trie{
        TrieNode root = new TrieNode();

        void insert(String number){
            TrieNode node = root;
            for(char c : number.toCharArray()){
                node.trie.putIfAbsent(c, new TrieNode());
                node = node.trie.get(c);
            }
            node.isEnd = true;
        }

        boolean select(String number){
            TrieNode node = root;

            for(char c : number.toCharArray()){
                if(node.isEnd) return true;
                node = node.trie.get(c);
            }
            return false;
        }
    }
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();

        for(int t = 1; t <= T; t++){
            int N = Integer.parseInt(br.readLine());
            String[] phoneNumber = new String[N];
            Trie trie = new Trie();

            for(int n = 0; n < N; n++){
                phoneNumber[n] = br.readLine();
                trie.insert(phoneNumber[n]);
            }

            int count = 0;
            for(String s : phoneNumber){
                if(trie.select(s)){
                    sb.append("NO\n");
                    break;
                }
                count++;
            }
            if(count == phoneNumber.length) sb.append("YES\n");
        }
        System.out.print(sb);
    }
}
