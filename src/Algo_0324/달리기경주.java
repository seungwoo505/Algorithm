package Algo_0324;

import java.util.Arrays;

public class 달리기경주 {
    public static String[] solution(String[] players, String[] callings) {
        for(String c : callings){
            for(int i = 0; i < players.length; i++){
                if(players[i].equals(c)){
                    String s = players[i];
                    players[i] = players[i - 1];
                    players[i - 1] = s;
                }
            }
        }
        return players;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(solution(new String[]{"mumu", "soe", "poe", "kai", "mine"}, new String[]{"kai", "kai", "mine", "mine"})));
    }
}