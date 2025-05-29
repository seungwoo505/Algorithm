package Algo_0509;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class google {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();

        for (int t = 1; t <= T; t++) {
            int N = Integer.parseInt(br.readLine());
            String[] s = br.readLine().split("");
            sb.append("Case #")
                    .append(t)
                    .append(": ");
            for (int n = 0; n < N; n++) {
                int code = 0;
                for (int i = 0; i < 8; i++) {
                    code |= (s[n * 8 + i].equals("I") ? 1 : 0) << (7 - i);
                }
                sb.append((char) code);
            }
            sb.append("\n");
        }

        System.out.println(sb);
    }
}
