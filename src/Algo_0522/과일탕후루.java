package Algo_0522;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 과일탕후루 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] fruits = new int[N];
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < N; i++) {
            fruits[i] = Integer.parseInt(st.nextToken());
        }

        int[] count = new int[10];
        int distinct = 0;
        int left = 0;
        int answer = 0;

        for (int right = 0; right < N; right++) {
            if (count[fruits[right]]++ == 0) {
                distinct++;
            }

            while (distinct > 2) {
                if (--count[fruits[left]] == 0) {
                    distinct--;
                }
                left++;
            }
            answer = Math.max(answer, right - left + 1);
        }

        System.out.println(answer);
    }
}