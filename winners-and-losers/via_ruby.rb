require 'pp'
game_arr = [
  { winner: 'Alice', loser: 'Bob', losers_score: 2 },
  { winner: 'Alice', loser: 'Dean', losers_score: 3 },
  { winner: 'Elise', loser: 'Bob', losers_score: 1 },
  { winner: 'Elise', loser: 'Carol', losers_score: 4 },
  { winner: 'Carol', loser: 'Dean', losers_score: 3 }
]

def get_players(game_arr)
  player_arr = []
  game_arr.each do |game|
    game.each do |key, name|
      # check specifically for 'winner' and 'loser' in case more hashes are 
      # added to the game_arr later as future-proofing
      if key === :winner || key === :loser
        player_arr.push(name) unless player_arr.include?(name)
      end
    end
  end
  player_arr
end

def who_beat_who(game_arr)
  game_hash = {}
  get_players(game_arr).each do |player|
    game_hash[player] = []
  end
  game_arr.each do |game|
    game_hash[game[:winner]].push(game[:loser])
  end
  game_hash
end

pp who_beat_who(game_arr)
