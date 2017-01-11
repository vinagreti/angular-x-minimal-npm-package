# Angular 2 Data Table

An Angular 2+ Data Table that uses HTTP to create, read, update and delete data from an external API such REST

## Warning
This module is a work in progress and is in concept phase.

## Installation

You can install the module using npm:

    `npm install angular-x-data-table --save`

## Attributes
| Attributes     | Description     | Default  |
| :------------- | :------------- | :------------- |
| title       | The table title | undefined |
| authTokenHeader       | Token used when calling the REST API | undefined |
| delete       | The delete endpoint | undefined |
| get       | The get endpoint | undefined |
| patch       | The patch endpoint | undefined |
| post       | The post endpoint | undefined |
| put       | The put endpoint | undefined |
| maxRows       | The max number of rows in a page | undefined |
| stripped       | Stripped table | false |
| condensed       | Turn the lines compact | false |
| hover       | Hover the line when the mouse is over | false |
| contentEditable       | Allow object edition directly in the table | false |

## Example
```js
<br-data-table
  title="My table title"
  authTokenHeader="Authorization: kjhl2sd34fhgn564356ljsvdhfgn34iery678gxeqwrgt"
></br-data-table>
```

## Run the demo

    `cd examples/webpack`
    `npm install`
    `npm start`

Then access [http://localhost:8080](http://localhost:8080)

## Contribution
To submit  a pull request, you should embed the styles and template in the component using `gulp` and compile using `tsc`.

To embed the styles and template just run:
- `gulp js:build`

To compile the application just run:
- `npm run build`

# To Do

 1. Lint the styles before inline
 2. Minify the styles before inline
 3. Lint the html before inline
 4. Minify the html before inline
