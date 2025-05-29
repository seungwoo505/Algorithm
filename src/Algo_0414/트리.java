package Algo_0414;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;
import java.util.StringTokenizer;

public class 트리 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        List<Integer>[] list = new ArrayList[N];

        for (int n = 0; n < N; n++) {
            list[n] = new ArrayList<>();
        }

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        int rootNode = -1;
        int[] tree = new int[N];
        for (int n = 0; n < N; n++) {
            tree[n] = Integer.parseInt(st.nextToken());
        }

        boolean[] isSelected = new boolean[N];
        int removeNode = Integer.parseInt(br.readLine());

        for (int n = 0; n < N; n++) {
            if (tree[n] == -1)
                rootNode = n;
            else if (removeNode != n)
                list[tree[n]].add(n);
        }

        isSelected[removeNode] = true;

        Deque<Integer> deque = new ArrayDeque<>();
        deque.offer(rootNode);

        int count = 0;

        while (!deque.isEmpty()) {
            int node = deque.poll();
            if (isSelected[node])
                continue;
            isSelected[node] = true;
            if (list[node].size() == 0)
                count++;

            for (int newNode : list[node]) {
                if (!isSelected[newNode])
                    deque.offer(newNode);
            }
        }

        System.out.println(count);
    }
}