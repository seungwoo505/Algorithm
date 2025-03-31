package Algo_0331;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

public class 멀티버스2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int M = Integer.parseInt(st.nextToken()), N = Integer.parseInt(st.nextToken());

        Map<List<Integer>, Integer> space = new HashMap<>();

        for(int m = 1; m <= M; m++){
            int[] list = new int[N];
            st = new StringTokenizer(br.readLine(), " ");

            for(int l = 0; l < N; l++){
                list[l] = Integer.parseInt(st.nextToken());
            }
            List<Integer> planet = spaceSize(list);
            space.put(planet, space.getOrDefault(planet, 0) + 1);
        }

        int answer = 0;

        for(int s : space.values()){
            answer += (s * (s - 1)) / 2;
        }

        System.out.println(answer);
    }

    static List<Integer> spaceSize(int[] list){
        Map<Integer, Integer> space = new HashMap<>();
        int[] sort = list.clone();
        Arrays.sort(sort);
        int count = 1;

        for(int s : sort){
            if(!space.containsKey(s)) space.put(s, count++);
        }

        List<Integer> planet = new ArrayList<>();

        for(int l : list){
            planet.add(space.get(l));
        }

        return planet;
    }
}
