 export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  tag_list: DS.attr(),
  updated_at: DS.attr('date')
});