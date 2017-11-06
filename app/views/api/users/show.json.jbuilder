json.intervals do
  json.array! @user_mapped_ids do |mapped_id|
    json.mapped_id mapped_id
    json.time_start @user_timestamps[mapped_id]
  end
end

json.user @user.id
