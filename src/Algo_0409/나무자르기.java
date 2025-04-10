package Algo_0409;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class 나무자르기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken()), M = Integer.parseInt(st.nextToken());

        st = new StringTokenizer(br.readLine(), " ");
        int[] list = new int[N];

        for (int n = 0; n < N; n++) {
            list[n] = Integer.parseInt(st.nextToken());
        }

        int min = 0, max = Arrays.stream(list).max().getAsInt();

        int result = 0;

        while (min <= max) {
            int mid = (max + min) / 2;
            long tree = 0;

            for (int t : list) {
                if (t > mid)
                    tree += t - mid;
            }
            if (tree >= M) {
                result = mid;
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }

        System.out.println(result);
    }
}
