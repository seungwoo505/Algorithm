package Algo_0527;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 퐁당퐁당1 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        int N = Integer.parseInt(st.nextToken());
        int T = Integer.parseInt(st.nextToken());

        int cycle = 4 * N - 2;
        int idx = (T - 1) % cycle;
        int answer;
        if (idx < 2 * N) {
            answer = idx + 1;
        } else {
            answer = (2 * N - 1) - (idx - 2 * N);
        }

        System.out.println(answer);
    }
}
