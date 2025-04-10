package Algo_0409;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class CupcakeParty {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int eight = Integer.parseInt(br.readLine());
        int three = Integer.parseInt(br.readLine());

        System.out.println((eight * 8 + three * 3) - 28);
    }
}
