package Algo_0430;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Gau {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int T = Integer.parseInt(br.readLine());

        for (int t = 1; t <= T; t++) {
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");
            long n = Long.parseLong(st.nextToken()), m = Long.parseLong(st.nextToken());
            long sum = (m - n + 1) * (n + m) / 2;

            sb.append("Scenario #")
                    .append(t)
                    .append(":\n")
                    .append(sum)
                    .append("\n\n");
        }

        System.out.println(sb.toString().trim());
    }
}
