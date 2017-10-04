Rails.application.config.generators do |g|
  g.orm :active_record, primary_key_type: :uuid
  g.stylesheets false
  g.javascripts false
  g.helper false
  g.view_specs false
  g.helper_specs false
  g.controller_specs false
  g.model_specs false
  g.test_framework  :test_unit, fixture: false
end
