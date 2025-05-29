package Algo_0522;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class 주사위 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        int S1 = Integer.parseInt(st.nextToken()), S2 = Integer.parseInt(st.nextToken()),
                S3 = Integer.parseInt(st.nextToken());

        Map<Integer, Integer> map = new HashMap<>();

        int[] answer = new int[] { Integer.MAX_VALUE, 0 };

        for (int s1 = 1; s1 <= S1; s1++) {
            for (int s2 = 1; s2 <= S2; s2++) {
                for (int s3 = 1; s3 <= S3; s3++) {
                    int s = s1 + s2 + s3;
                    int total = map.getOrDefault(s, 0) + 1;
                    map.put(s, total);
                }
            }
        }

        for (int m : map.keySet()) {
            int get = map.get(m);
            if (answer[1] < get) {
                answer = new int[] { m, get };
            }
        }

        System.out.println(answer[0]);

    }
}
