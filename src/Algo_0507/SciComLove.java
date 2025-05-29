package Algo_0507;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class SciComLove {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();

        sb.append("SciComLove")
                .append(N == 2 ? "\nSciComLove" : "");

        System.out.println(sb);
    }
}
