## JSON templating

Create a template file json file, example:

`template.json`

```json
{
    "field1": "value1",
    "field2": "value2",
    "field3": "value3"
}
```

Create a parameters directory with parameter json files, example:

`params/p1.json`

```json
{
    "field2": "other value 1"
}
```

`params/p2.json`

```json
{
    "field2": "other value 2"
}
```

Create the output directory, example:

`mkdir out`

Run the program:

`npm start template.json params out`

This will combine the template with the parameters and save an output file for each parameter file. The output directory will contain:

`out/p1.json`

```json
{
    "field1": "value1",
    "field2": "other value 1",
    "field3": "value3"
}
```

`out/p2.json`

```json
{
    "field1": "value1",
    "field2": "other value 2",
    "field3": "value3"
}
```
