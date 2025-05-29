package Algo_0526;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class 최소스패닝트리 {

    public static class Edge implements Comparable<Edge> {
        int now, next, cost;

        Edge(int now, int next, int cost) {
            this.now = now;
            this.next = next;
            this.cost = cost;
        }

        @Override
        public int compareTo(Edge o) {
            return Integer.compare(this.cost, o.cost);
        }
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int V = Integer.parseInt(st.nextToken()), E = Integer.parseInt(st.nextToken());

        List<Edge>[] list = new ArrayList[V + 1];
        boolean[] visible = new boolean[V + 1];

        for (int v = 1; v <= V; v++) {
            list[v] = new ArrayList<>();
        }

        for (int e = 0; e < E; e++) {
            st = new StringTokenizer(br.readLine(), " ");

            int A = Integer.parseInt(st.nextToken()), B = Integer.parseInt(st.nextToken()),
                    C = Integer.parseInt(st.nextToken());

            list[A].add(new Edge(A, B, C));
            list[B].add(new Edge(B, A, C));
        }

        PriorityQueue<Edge> queue = new PriorityQueue<>();

        visible[1] = true;

        for (Edge e : list[1]) {
            queue.offer(e);
        }

        int cost = 0;

        while (!queue.isEmpty()) {
            Edge e = queue.poll();

            if (visible[e.next])
                continue;

            visible[e.next] = true;
            cost += e.cost;

            for (Edge next : list[e.next]) {
                if (!visible[next.next])
                    queue.offer(next);
            }
        }

        System.out.println(cost);
    }
}
