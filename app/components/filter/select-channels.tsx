import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FormControl from '@mui/material/FormControl';
import { useDashboardStore } from '../../store/store';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SelectChannels(props:any) {
  const [ channels, setChannels] = React.useState<({channelLabel:string, channelTag:number})[]>([]);
  const setFilterChannels = useDashboardStore((state: any) => state.setFilterChannels);

  React.useEffect(()=>{
    setFilterChannels(channels);
  },[channels]);

  return (
    <FormControl fullWidth size="small">
    <Autocomplete
      // value={channels}
      size="small"
      multiple
      id="nbs-select-channels"
      options={filterChannelsData}
      disableCloseOnSelect
      getOptionLabel={(option) => option.channelLabel}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.channelLabel}
        </li>
      )}
      style={{ width: "100%" }}
      renderInput={(params) => (
        <TextField {...params} label="Channels" placeholder="Channels, all if none selected" />
      )}
      onChange = {
        (event, newValue) => {
          setFilterChannels(newValue);
          setChannels(newValue);
        }
      }
    />
    </FormControl>
  );
}



// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const filterChannelsData = [
  { channelLabel: 'The Shawshank Redemption', channelTag: 1994 },
  { channelLabel: 'The Godfather', channelTag: 1972 },
  { channelLabel: 'The Godfather: Part II', channelTag: 1974 },
  { channelLabel: 'The Dark Knight', channelTag: 2008 },
  { channelLabel: '12 Angry Men', channelTag: 1957 },
  { channelLabel: "Schindler's List", channelTag: 1993 },
  { channelLabel: 'Pulp Fiction', channelTag: 1994 },
  {
    channelLabel: 'The Lord of the Rings: The Return of the King',
    channelTag: 2003,
  },
  { channelLabel: 'The Good, the Bad and the Ugly', channelTag: 1966 },
  { channelLabel: 'Fight Club', channelTag: 1999 },
  {
    channelLabel: 'The Lord of the Rings: The Fellowship of the Ring',
    channelTag: 2001,
  },
  {
    channelLabel: 'Star Wars: Episode V - The Empire Strikes Back',
    channelTag: 1980,
  },
  { channelLabel: 'Forrest Gump', channelTag: 1994 },
  { channelLabel: 'Inception', channelTag: 2010 },
  {
    channelLabel: 'The Lord of the Rings: The Two Towers',
    channelTag: 2002,
  },
  { channelLabel: "One Flew Over the Cuckoo's Nest", channelTag: 1975 },
  { channelLabel: 'Goodfellas', channelTag: 1990 },
  { channelLabel: 'The Matrix', channelTag: 1999 },
  { channelLabel: 'Seven Samurai', channelTag: 1954 },
  {
    channelLabel: 'Star Wars: Episode IV - A New Hope',
    channelTag: 1977,
  },
  { channelLabel: 'City of God', channelTag: 2002 },
  { channelLabel: 'Se7en', channelTag: 1995 },
  { channelLabel: 'The Silence of the Lambs', channelTag: 1991 },
  { channelLabel: "It's a Wonderful Life", channelTag: 1946 },
  { channelLabel: 'Life Is Beautiful', channelTag: 1997 },
  { channelLabel: 'The Usual Suspects', channelTag: 1995 },
  { channelLabel: 'Léon: The Professional', channelTag: 1994 },
  { channelLabel: 'Spirited Away', channelTag: 2001 },
  { channelLabel: 'Saving Private Ryan', channelTag: 1998 },
  { channelLabel: 'Once Upon a Time in the West', channelTag: 1968 },
  { channelLabel: 'American History X', channelTag: 1998 },
  { channelLabel: 'Interstellar', channelTag: 2014 },
];