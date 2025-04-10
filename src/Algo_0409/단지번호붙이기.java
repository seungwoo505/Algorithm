package Algo_0409;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

public class 단지번호붙이기 {
    public static void main(String[] args) throws IOException {
        int[][] d = new int[][] { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int[][] list = new int[N][N];
        List<Integer> home = new ArrayList<>();
        boolean[][] visible = new boolean[N][N];
        Deque<int[]> deque = new ArrayDeque<>();

        for (int n = 0; n < N; n++) {
            String[] s = br.readLine().split("");

            for (int i = 0; i < N; i++) {
                list[n][i] = Integer.parseInt(s[i]);
            }
        }

        for (int n = 0; n < N; n++) {
            for (int i = 0; i < N; i++) {
                if (list[n][i] == 1 && !visible[n][i]) {
                    deque.offer(new int[] { n, i });
                    int count = 0;

                    while (!deque.isEmpty()) {
                        int[] nowPoint = deque.poll();

                        if (visible[nowPoint[0]][nowPoint[1]])
                            continue;

                        visible[nowPoint[0]][nowPoint[1]] = true;
                        count++;

                        for (int[] xy : d) {
                            int[] newPoint = new int[] { nowPoint[0] + xy[0], nowPoint[1] + xy[1] };

                            if (newPoint[0] >= 0 && newPoint[0] < N
                                    && newPoint[1] >= 0 && newPoint[1] < N
                                    && !visible[newPoint[0]][newPoint[1]]
                                    && list[newPoint[0]][newPoint[1]] == 1) {
                                deque.offer(newPoint);
                            }
                        }
                    }

                    home.add(count);
                }
            }
        }

        StringBuilder sb = new StringBuilder();

        sb.append(home.size())
                .append("\n");

        home.sort((n1, n2) -> n1 - n2);

        for (int i : home) {
            sb.append(i)
                    .append("\n");
        }

        System.out.print(sb);
    }
}
