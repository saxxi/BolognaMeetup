class EventsController < ApplicationController

  before_action :find_event, only: [:show, :update, :destroy]

  def index
    @events = Event.search(search_events_params)
  end

  def search
    @events = Event.search(search_events_params)
    render json: @events.as_list
  end

  def create
    @event = Event.new event_params

    api_resource_respond @event do
      @event.save
    end
  end

  def show
    render json: @event.to_builder.attributes!
  end

  def update
    api_resource_respond @event do
      @event.update event_params
    end
  end

  def destroy
    api_resource_respond @event do
      @event.destroy
    end
  end

  private

  def search_events_params
    params.permit(
      :q,
      :place,
      # ... evt_date, start_time, end_time
      :exclude_ids
    ).tap do |p|
      p[:exclude_ids] = p[:exclude_ids].split(',') if p[:exclude_ids].present?
    end
  end

  def event_params
    params.permit :id, :name
  end

  def find_event
    @event = Event.find(params[:id])
  end

end
