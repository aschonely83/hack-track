class PlayersController < ApplicationController
  
    def index
    players = Player.all 
    render json: PlayerSerializer.new(players) 
  end

  def create
    player = Player.new(player_params)
    if player.save
      render json: player, status: :accepted
    else
        render json: {errors: player.errors.full_message}, status: :unprocessible_entity
    end
  end

  private

  def player_params
    params.require(:player).permit(:name)
  end
end
