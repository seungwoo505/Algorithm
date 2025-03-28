package Algo_0328;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class 통계학 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[] num = new int[N];

        for(int i = 0; i < N; i++){
            num[i] = Integer.parseInt(br.readLine());
        }

        Arrays.sort(num);

        Map<Integer, Integer> map = new HashMap<>();

        for(int n : num){
            map.put(n, map.getOrDefault(n, 0) + 1);
        }

        int maxLen = 0;
        for(int m : map.values()){
            maxLen = Math.max(maxLen, m);
        }

        List<Integer> list = new ArrayList<>();

        for(int m : map.keySet()){
            if(map.get(m) == maxLen) list.add(m);
        }

        list.sort((n1, n2)-> n1 - n2);

        StringBuilder sb = new StringBuilder();

        sb.append((int)Math.round(Arrays.stream(num).average().getAsDouble()))
          .append("\n")
          .append(num[N / 2])
          .append("\n")
          .append(list.size() == 1 ? list.get(0) : list.get(1))
          .append("\n")
          .append((Arrays.stream(num).max().getAsInt() - Arrays.stream(num).min().getAsInt()));

        System.out.println(sb);
    }
}
