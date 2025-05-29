package Algo_0412;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.StringTokenizer;

public class 좌표압축 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[] list = new int[N];
        StringTokenizer st = new StringTokenizer(br.readLine());

        for (int n = 0; n < N; n++) {
            list[n] = Integer.parseInt(st.nextToken());
        }

        Set<Integer> set = new HashSet<>();

        for (int l : list) {
            set.add(l);
        }

        List<Integer> zip = new ArrayList<>(set);
        Collections.sort(zip);

        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < zip.size(); i++) {
            map.put(zip.get(i), i);
        }

        StringBuilder sb = new StringBuilder(N * 2);
        for (int l : list) {
            sb.append(map.get(l))
                    .append(" ");
        }

        System.out.println(sb.toString().trim());
    }
}
