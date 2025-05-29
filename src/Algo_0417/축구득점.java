package Algo_0417;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 축구득점 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] one = new int[5], two = new int[5], count = new int[] { 6, 3, 2, 1, 2 };

        StringTokenizer st = new StringTokenizer(br.readLine());

        for (int i = 0; i < 5; i++) {
            one[i] = Integer.parseInt(st.nextToken());
        }

        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < 5; i++) {
            two[i] = Integer.parseInt(st.nextToken());
        }

        int oneCount = 0, twoCount = 0;

        for (int i = 0; i < 5; i++) {
            oneCount += one[i] * count[i];
            twoCount += two[i] * count[i];
        }

        StringBuilder sb = new StringBuilder();

        sb.append(oneCount).append(" ").append(twoCount);

        System.out.println(sb.toString());
    }
}
