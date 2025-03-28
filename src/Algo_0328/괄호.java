package Algo_0328;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 괄호 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();

        for(int t = 0; t < T; t++){
            char[] paren = br.readLine().toCharArray();
            int count = 0;
            for(char p : paren){
                if(count < 0) break;
                if(p == '(') count++;
                else count--;
            }

            if(count == 0) sb.append("YES\n");
            else sb.append("NO\n");
        }

        System.out.print(sb);
    }
}
