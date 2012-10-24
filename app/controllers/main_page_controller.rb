class MainPageController < ApplicationController
	before_filter :check_for_mobile, :only => [ :new, :edit, :index ]
	before_filter :prepare_for_mobile, :only => :show
  def index
	print 'Laurel Tree Computing LLC'
  end

  def contact
  end

  def about
  end

  def support
  end

end
