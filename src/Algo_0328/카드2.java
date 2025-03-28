package Algo_0328;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;

public class 카드2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        Deque<Integer> card = new ArrayDeque<>();

        for(int n = 1; n <= N; n++){
            card.offer(n);
        }

        while (card.size() > 1) {
            card.poll();
            int secondCard = card.poll();

            card.offer(secondCard);
        }

        System.out.println(card.poll());
    }
}
