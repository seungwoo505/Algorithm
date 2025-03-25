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
            node.isEnd = true; //끝났다고 표시
        }

        boolean select(String number){
            TrieNode node = root;

            for(char c : number.toCharArray()){
                if(node.isEnd) return true; // 만약 돌고있는데 이미 끝난 적이 있다면 그 번호로 자동 연결되기 때문에 일관성 x
                node = node.trie.get(c);
            }
            return false; // 이곳까지 도달했다면 전화번호를 전부 입력한 것
        }
    }
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();

        for(int t = 1; t <= T; t++){ // 테스트 케이스
            int N = Integer.parseInt(br.readLine());
            String[] phoneNumber = new String[N];
            Trie trie = new Trie();

            for(int n = 0; n < N; n++){
                phoneNumber[n] = br.readLine();
                trie.insert(phoneNumber[n]);
            }

            int count = 0;
            for(String s : phoneNumber){
                if(trie.select(s)){ // 일관성 체크
                    /**
                     * 일관성이 하나라도 없으면 NO로 표시되므로 다음부터 확인할 필요없음
                     * 그러므로 이 곳 진입 시 break
                     */
                    sb.append("NO\n");
                    break;
                }
                count++; // 일관된 전화번호 개수 파악
            }
            // 전화번호와 일관된 전화번호가 같을 경우 일관성이 있다고 판단
            if(count == phoneNumber.length) sb.append("YES\n");
        }
        System.out.print(sb);
    }
}
