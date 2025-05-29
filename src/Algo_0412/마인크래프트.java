package Algo_0412;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class 마인크래프트 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken()), M = Integer.parseInt(st.nextToken()),
                B = Integer.parseInt(st.nextToken());

        Map<Integer, Integer> minecraft = new HashMap<>();

        for (int n = 0; n < N; n++) {
            st = new StringTokenizer(br.readLine(), " ");
            for (int m = 0; m < M; m++) {
                int earth = Integer.parseInt(st.nextToken());
                minecraft.put(earth, minecraft.getOrDefault(earth, 0) + 1);
            }
        }

        int[] min = new int[] { Integer.MAX_VALUE, 0 };

        for (int height = 0; height <= 256; height++) {
            int[] flat = new int[] { 0, height };
            int block = B;
            for (int earth : minecraft.keySet()) {
                if (earth == height)
                    continue;
                else if (earth < height) {
                    flat[0] += (height - earth) * minecraft.get(earth);
                    block -= (height - earth) * minecraft.get(earth);
                } else {
                    flat[0] += (earth - height) * minecraft.get(earth) * 2;
                    block += (earth - height) * minecraft.get(earth);
                }
            }

            if (block >= 0 && (flat[0] < min[0] || (flat[0] == min[0] && flat[1] > min[1])))
                min = flat;
        }

        StringBuilder sb = new StringBuilder();

        for (int m : min) {
            sb.append(m)
                    .append(" ");
        }

        System.out.println(sb.toString().trim());
    }
}
