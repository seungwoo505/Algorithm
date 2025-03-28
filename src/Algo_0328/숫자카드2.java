package Algo_0328;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 숫자카드2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int[] card = new int[20000001];

        for(String s : br.readLine().split(" ")){

            card[Integer.parseInt(s) + 10000000]++;
        }

        int M = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder(M * 2);

        for(String s : br.readLine().split(" ")){
            sb.append(card[Integer.parseInt(s) + 10000000])
              .append(" ");
        }

        System.out.println(sb.toString().trim());


    }
}
