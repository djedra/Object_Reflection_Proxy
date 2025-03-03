export default function destructuring({ special }) {
  return special.map(({ id, name, icon, description }) => ({
    id,
    name,
    icon,
    description: description || 'Описание недоступно',
  }));
}
