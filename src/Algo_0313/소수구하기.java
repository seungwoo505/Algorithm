package Algo_0313;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 소수구하기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int min = Integer.parseInt(st.nextToken()), max = Integer.parseInt(st.nextToken());

        boolean[] num = new boolean[max + 1];
        
        // 0과 1은 소수가 아님
        num[0] = num[1] = true;

        StringBuilder sb = new StringBuilder();

        // 에라토스테네스의 체
        for (int i = 2; i * i <= max; i++) {
            if (!num[i]) {
                for (int j = i * i; j <= max; j += i) {
                    num[j] = true;
                }
            }
        }

        // 소수 출력
        for (int i = min; i <= max; i++) {
            if (!num[i]) sb.append(i).append("\n");
        }
        System.out.println(sb);
    }
}
