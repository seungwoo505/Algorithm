package Algo_0310;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class 나이순정렬 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        String[][] member = new String[N][2];

        for(int i = 0; i < N; i++){
            member[i] = br.readLine().split(" ");
        }

        Arrays.sort(member, (s1, s2) -> {
            return Integer.parseInt(s1[0]) - Integer.parseInt(s2[0]); 
        });

        StringBuilder sb = new StringBuilder();

       for(int i = 0; i < N; i++){
        sb.append(member[i][0])
          .append(" ")
          .append(member[i][1])
          .append("\n");
       }

       System.out.print(sb);
    }
}
