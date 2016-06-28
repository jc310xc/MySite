class PortfolioControllerController < ApplicationController
  def home
    @projects = Project.all
  end

  def about
  end
end
