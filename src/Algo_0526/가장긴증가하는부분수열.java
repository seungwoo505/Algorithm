package Algo_0526;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.StringTokenizer;

public class 가장긴증가하는부분수열 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        Deque<Integer> deque = new ArrayDeque<>();
        deque.offerLast(Integer.parseInt(st.nextToken()));

        int diff = 0;
        int maxLen = 0;

        for (int n = 1; n < N; n++) {
            int Ai = Integer.parseInt(st.nextToken());

            int LastPoint = deque.peekLast();

            if (deque.size() == 1) {
                diff = Ai - LastPoint;
            } else {
                if (diff != Ai - LastPoint) {
                    maxLen = Math.max(maxLen, deque.size());
                    while (!deque.isEmpty() && diff != Ai - LastPoint) {
                        deque.pollLast();
                        LastPoint = deque.peekLast();

                        diff = Ai - LastPoint;
                    }
                }
            }
            deque.offerLast(Ai);
        }

        maxLen = Math.max(maxLen, deque.size());

        System.out.println(maxLen);
    }
}
