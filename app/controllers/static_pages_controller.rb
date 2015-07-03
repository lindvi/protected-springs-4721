class StaticPagesController < ApplicationController

	def framed
		logger.info request.env
	end

end
