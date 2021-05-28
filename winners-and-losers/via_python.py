from pprint import pprint
game_list = [
    {'winner': 'Alice', 'loser': 'Bob', 'losers_score': 2},
    {'winner': 'Alice', 'loser': 'Dean', 'losers_score': 3},
    {'winner': 'Elise', 'loser': 'Bob', 'losers_score': 1},
    {'winner': 'Elise', 'loser': 'Carol', 'losers_score': 4},
    {'winner': 'Carol', 'loser': 'Dean', 'losers_score': 3}
]


def get_players(game_list):
    player_list = []
    for game in game_list:
        for key in game:
            if key == 'winner' or key == 'loser':
                if game[key] not in player_list:
                    player_list.append(game[key])
    return(player_list)


def who_beat_who(game_list):
    game_dict = {}
    for name in get_players(game_list):
        game_dict[name] = []
    for game in game_list:
        game_dict[game['winner']].append(game['loser'])
    return(game_dict)


pprint(who_beat_who(game_list))
