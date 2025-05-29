package Algo_0522;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class 현내기는친구가필요해 {
    public static void main(String[] args) throws IOException {
        int[][] d = new int[][] { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken()), M = Integer.parseInt(st.nextToken());

        char[][] list = new char[N][M];

        Queue<int[]> queue = new LinkedList<>();
        boolean[][] visible = new boolean[N][M];
        int people = 0;

        for (int n = 0; n < N; n++) {
            char[] c = br.readLine().toCharArray();

            for (int m = 0; m < M; m++) {
                char point = c[m];
                list[n][m] = point;
                if (point == 'I')
                    queue.offer(new int[] { n, m });
            }
        }

        while (!queue.isEmpty()) {
            int[] q = queue.poll();

            if (visible[q[0]][q[1]])
                continue;

            visible[q[0]][q[1]] = true;

            if (list[q[0]][q[1]] == 'P')
                people++;

            for (int[] yx : d) {
                int[] dyx = new int[] { q[0] + yx[0], q[1] + yx[1] };

                if (dyx[0] >= 0 && dyx[0] < N &&
                        dyx[1] >= 0 && dyx[1] < M &&
                        !visible[dyx[0]][dyx[1]] && list[dyx[0]][dyx[1]] != 'X') {
                    queue.offer(dyx);
                }
            }
        }

        System.out.println(people == 0 ? "TT" : people);
    }
}
