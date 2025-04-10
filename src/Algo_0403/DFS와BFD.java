package Algo_0403;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Deque;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class DFS와BFD {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken()), M = Integer.parseInt(st.nextToken()), V = Integer.parseInt(st.nextToken());
        Map<Integer, ArrayList<Integer>> list = new HashMap<>();

        for(int m = 0; m < M; m++){
            st = new StringTokenizer(br.readLine());
            int one = Integer.parseInt(st.nextToken()), two = Integer.parseInt(st.nextToken());

            ArrayList<Integer> conn1 = list.getOrDefault(one, new ArrayList<>());
            ArrayList<Integer> conn2 = list.getOrDefault(two, new ArrayList<>());

            conn1.add(two);
            conn2.add(one);

            list.put(one, conn1);
            list.put(two, conn2);
        }

        boolean[] BFS = new boolean[N + 1];
        boolean[] DFS = new boolean[N + 1];
        StringBuilder sb = new StringBuilder();

        Deque<Integer> deque = new ArrayDeque<>();
        deque.offer(V);

        //DFS
        while(!deque.isEmpty()){
            int now = deque.pollLast();
            if(DFS[now]) continue;
            DFS[now] = true;
            sb.append(now)
              .append(" ");
            ArrayList<Integer> newList = list.get(now);
            if(newList == null) continue;
            Collections.sort(newList, Collections.reverseOrder());

            for(int newPoint : newList){
                if(!DFS[newPoint]) deque.offer(newPoint);
            }
        }

        sb.append("\n");

        deque.offer(V);

        //BFS
        while(!deque.isEmpty()){
            int now = deque.pollFirst();
            if(BFS[now]) continue;
            BFS[now] = true;
            sb.append(now)
              .append(" ");
            ArrayList<Integer> newList = list.get(now);
            if(newList == null) continue;
            Collections.sort(newList);

            for(int newPoint : newList){
                if(!BFS[newPoint]) deque.offer(newPoint);
            }
        }

        System.out.println(sb);
    }
}
