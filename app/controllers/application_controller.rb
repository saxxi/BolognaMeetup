class ApplicationController < ActionController::Base

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def api_resource_respond(resource)
    render json: (
      if yield
        resource.to_builder.target!
      else
        errors_to_builder(resource)
      end
    )
  end

  def api_error(message)
    render json: ({
      errors: {
        message: message
      }
    })
  end

  def current_user # Fake!
    @current_user ||= User.first
  end
  helper_method :current_user

  protected

  # def verified_request?
  #   super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  # end

  def errors_to_builder(model)
    {
      errors: {
        message: model.errors.full_messages.to_sentence,
        fields: model.errors
      }
    }
  end

end
