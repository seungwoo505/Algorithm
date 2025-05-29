package Algo_0421;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 개표 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();

        for (int t = 0; t < T; t++) {
            int n = Integer.parseInt(br.readLine());

            while (n > 0) {
                if (n / 5 >= 1) {
                    n -= 5;
                    sb.append("++++ ");
                } else {
                    n -= 1;
                    sb.append("|");
                }
            }
            sb.append("\n");
        }

        System.out.println(sb);
    }
}
