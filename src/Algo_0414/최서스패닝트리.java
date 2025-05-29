package Algo_0414;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class 최서스패닝트리 {

    static class graph {
        int A, B, cost;

        graph(int A, int B, int cost) {
            this.A = A;
            this.B = B;
            this.cost = cost;
        }
    }

    static int[] parant;

    static int find(int a) {
        if (parant[a] == a)
            return a;
        return parant[a] = find(parant[a]);
    }

    static void union(int a, int b) {
        int from = find(a);
        int to = find(b);

        if (from != to)
            parant[to] = from;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        int V = Integer.parseInt(st.nextToken()), E = Integer.parseInt(st.nextToken());

        parant = new int[V + 1];
        List<graph> list = new ArrayList<>();

        for (int e = 0; e < E; e++) {
            st = new StringTokenizer(br.readLine(), " ");

            int A = Integer.parseInt(st.nextToken()), B = Integer.parseInt(st.nextToken()),
                    C = Integer.parseInt(st.nextToken());

            list.add(new graph(A, B, C));
        }

        list.sort((n1, n2) -> n1.cost - n2.cost);

        int total = 0;

        for (graph g : list) {
            if (find(g.A) != find(g.B)) {
                union(g.A, g.B);
                total += g.cost;
            }
        }

        System.out.println(total);
    }
}
