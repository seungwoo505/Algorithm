package Algo_0509;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 양파실험 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken()), A = Integer.parseInt(st.nextToken()),
                B = Integer.parseInt(st.nextToken());

        int a = 1, b = 1;

        for (int n = 0; n < N; n++) {
            a += A;
            b += B;

            if (b > a) {
                int c = a;
                a = b;
                b = c;
            } else if (a == b) {
                b--;
            }
        }

        StringBuilder sb = new StringBuilder();

        sb.append(a)
                .append(" ")
                .append(b);

        System.out.println(sb);
    }
}
