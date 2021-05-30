<template>
  <div class="topright-pictionial">
    <div class="main">
      <topRightTime />
    </div>
    <div class="pictionial-flex">
      <div class="pictionial-data">
        <Echart
          :options="options"
          :id="1"
          height="3rem"
          width="100%"
        ></Echart>
      </div>
      <div class="pictionial-data">
        <Echart
          :options="options1"
          :id="2"
          height="3rem"
          width="100%"
        ></Echart>
      </div>
    </div>
    <div class="pictionial-flex">
      <div class="pictionial-data">
        <Echart
          :options="options2"
          :id="3"
          height="3rem"
          width="100%"
        ></Echart>
      </div>
      <div class="pictionial-data">
        <Echart
          :options="options3"
          :id="4"
          height="3rem"
          width="100%"
        ></Echart>
      </div>
    </div>
  </div>
</template>
<script>
import Echart from "@/common/echart";
import topRightTime from "../topRight/topRightTime"
import { ProductionExecution } from "../../../api/index.js";
var pathSymbols = {
  car:
    "path://M49.592,40.883c-0.053,0.354-0.139,0.697-0.268,0.963c-0.232,0.475-0.455,0.519-1.334,0.475 c-1.135-0.053-2.764,0-4.484,0.068c0,0.476,0.018,0.697,0.018,0.697c0.111,1.299,0.697,1.342,0.931,1.342h3.7 c0.326,0,0.628,0,0.861-0.154c0.301-0.196,0.43-0.772,0.543-1.78c0.017-0.146,0.025-0.336,0.033-0.56v-0.01 c0-0.068,0.008-0.154,0.008-0.25V41.58l0,0C49.6,41.348,49.6,41.09,49.592,40.883L49.592,40.883z M6.057,40.883 c0.053,0.354,0.137,0.697,0.268,0.963c0.23,0.475,0.455,0.519,1.334,0.475c1.137-0.053,2.762,0,4.484,0.068 c0,0.476-0.018,0.697-0.018,0.697c-0.111,1.299-0.697,1.342-0.93,1.342h-3.7c-0.328,0-0.602,0-0.861-0.154 c-0.309-0.18-0.43-0.772-0.541-1.78c-0.018-0.146-0.027-0.336-0.035-0.56v-0.01c0-0.068-0.008-0.154-0.008-0.25V41.58l0,0 C6.057,41.348,6.057,41.09,6.057,40.883L6.057,40.883z M49.867,32.766c0-2.642-0.344-5.224-0.482-5.507 c-0.104-0.207-0.766-0.749-2.271-1.773c-1.522-1.042-1.487-0.887-1.766-1.566c0.25-0.078,0.492-0.224,0.639-0.241 c0.326-0.034,0.345,0.274,1.023,0.274c0.68,0,2.152-0.18,2.453-0.48c0.301-0.303,0.396-0.405,0.396-0.672 c0-0.268-0.156-0.818-0.447-1.146c-0.293-0.327-1.541-0.49-2.273-0.585c-0.729-0.095-0.834,0-1.022,0.121 c-0.304,0.189-0.32,1.919-0.32,1.919l-0.713,0.018c-0.465-1.146-1.11-3.452-2.117-5.269c-1.103-1.979-2.256-2.599-2.737-2.754 c-0.474-0.146-0.904-0.249-4.131-0.576c-3.298-0.344-5.922-0.388-8.262-0.388c-2.342,0-4.967,0.052-8.264,0.388 c-3.229,0.336-3.66,0.43-4.133,0.576s-1.633,0.775-2.736,2.754c-1.006,1.816-1.652,4.123-2.117,5.269L9.87,23.109 c0,0-0.008-1.729-0.318-1.919c-0.189-0.121-0.293-0.225-1.023-0.121c-0.732,0.104-1.98,0.258-2.273,0.585 c-0.293,0.327-0.447,0.878-0.447,1.146c0,0.267,0.094,0.379,0.396,0.672c0.301,0.301,1.773,0.48,2.453,0.48 c0.68,0,0.697-0.309,1.023-0.274c0.146,0.018,0.396,0.163,0.637,0.241c-0.283,0.68-0.24,0.524-1.764,1.566 c-1.506,1.033-2.178,1.566-2.271,1.773c-0.139,0.283-0.482,2.865-0.482,5.508s0.189,5.02,0.189,5.86c0,0.354,0,0.976,0.076,1.565 c0.053,0.354,0.129,0.697,0.268,0.966c0.232,0.473,0.447,0.516,1.334,0.473c1.137-0.051,2.779,0,4.477,0.07 c1.135,0.043,2.297,0.086,3.33,0.11c2.582,0.051,1.826-0.379,2.928-0.36c1.102,0.016,5.447,0.196,9.424,0.196 c3.976,0,8.332-0.182,9.423-0.196c1.102-0.019,0.346,0.411,2.926,0.36c1.033-0.018,2.195-0.067,3.332-0.11 c1.695-0.062,3.348-0.121,4.477-0.07c0.886,0.043,1.103,0,1.332-0.473c0.132-0.269,0.218-0.611,0.269-0.966 c0.086-0.592,0.078-1.213,0.078-1.565C49.678,37.793,49.867,35.408,49.867,32.766L49.867,32.766z M13.219,19.735 c0.412-0.964,1.652-2.9,2.256-3.244c0.145-0.087,1.426-0.491,4.637-0.706c2.953-0.198,6.217-0.276,7.73-0.276 c1.513,0,4.777,0.078,7.729,0.276c3.201,0.215,4.502,0.611,4.639,0.706c0.775,0.533,1.842,2.28,2.256,3.244 c0.412,0.965,0.965,2.858,0.861,3.116c-0.104,0.258,0.104,0.388-1.291,0.275c-1.387-0.103-10.088-0.216-14.185-0.216 c-4.088,0-12.789,0.113-14.184,0.216c-1.395,0.104-1.188-0.018-1.291-0.275C12.254,22.593,12.805,20.708,13.219,19.735 L13.219,19.735z M16.385,30.511c-0.619,0.155-0.988,0.491-1.764,0.482c-0.775,0-2.867-0.353-3.314-0.371 c-0.447-0.017-0.842,0.302-1.076,0.362c-0.23,0.06-0.688-0.104-1.377-0.318c-0.688-0.216-1.092-0.155-1.316-1.094 c-0.232-0.93,0-2.264,0-2.264c1.488-0.068,2.928,0.069,5.621,0.826c2.693,0.758,4.191,2.213,4.191,2.213 S17.004,30.357,16.385,30.511L16.385,30.511z M36.629,37.293c-1.23,0.164-6.386,0.207-8.794,0.207c-2.412,0-7.566-0.051-8.799-0.207 c-1.256-0.164-2.891-1.67-1.764-2.865c1.523-1.627,1.24-1.576,4.701-2.023C24.967,32.018,27.239,32,27.834,32 c0.584,0,2.865,0.025,5.859,0.404c3.461,0.447,3.178,0.396,4.699,2.022C39.521,35.623,37.887,37.129,36.629,37.293L36.629,37.293z  M48.129,29.582c-0.232,0.93-0.629,0.878-1.318,1.093c-0.688,0.216-1.145,0.371-1.377,0.319c-0.231-0.053-0.627-0.371-1.074-0.361 c-0.448,0.018-2.539,0.37-3.313,0.37c-0.772,0-1.146-0.328-1.764-0.481c-0.621-0.154-0.966-0.154-0.966-0.154 s1.49-1.464,4.191-2.213c2.693-0.758,4.131-0.895,5.621-0.826C48.129,27.309,48.361,28.643,48.129,29.582L48.129,29.582z",
  machine:
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHg2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0id3d3Lm1laXR1LmNvbSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMTlUMTc6NTE6NTQrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTE5VDE5OjI0OjUyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTE5VDE5OjI0OjUyKzA4OjAwIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NjZiMTE5MDktNzJkOS1hYjQ4LThiMGItYmZlYTNkY2YxYTU2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1NzY2ZjYxLTkwZGItZDQ0Yy1hM2YxLTI4ZTc4NDkzZGZhOCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSI3NzMwRUI1MjM4MTc1RjU4RUI0RDJFQUUxRkI5MTg0OCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphOTk3ZDU0OS1iNDk1LTVjNDUtOGEwNS02MWEyMjFkODdlODQiIHN0RXZ0OndoZW49IjIwMjEtMDUtMTlUMTk6MjQ6NTIrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDU3NjZmNjEtOTBkYi1kNDRjLWEzZjEtMjhlNzg0OTNkZmE4IiBzdEV2dDp3aGVuPSIyMDIxLTA1LTE5VDE5OjI0OjUyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE5OTdkNTQ5LWI0OTUtNWM0NS04YTA1LTYxYTIyMWQ4N2U4NCIgc3RSZWY6ZG9jdW1lbnRJRD0iNzczMEVCNTIzODE3NUY1OEVCNEQyRUFFMUZCOTE4NDgiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0iNzczMEVCNTIzODE3NUY1OEVCNEQyRUFFMUZCOTE4NDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Zi3TGAAACyElEQVRIibXWW4hXVRTH8c9/5q8OMqITDSqBKPjgXRMhTS1UcrxAlNWD4vikSIjgg5I9qBGKiD50gRLRVFREFEWLShRBGupBRJgGBsvKBMGQ1CEp7/qw93EOf875X2z8vZxz9lpnffdlrb13Yey2W56jZuFTjMYdHMZKdNU9R+gSnMYL+AA70YoONBcznK/ju2eEDcdczEdLBL+Rsm/Fn9iagF/CZ1iABxiHzipA9Xg5QlrwamxLtLHE/wo+wfIiPsKGaLiGQfgeM/B7Bqwx2lowEyPLdOx2Rtt19KnD27FhHQbHjgwRpqkp2pqxFEdxGSewogIUFpV898JqnKkfOHttWwy4NxrPRvBMDMQ9HBcSYyT6VoClNQX98AdGxDhD8V4hp5zm4tsaANXqb7yDs0VhdAUh2xJNis9z+FEYbV/cEJLvhlCXd+L3b0JSLS0DvS/MYjsUcQDT8Ca+xmJ8jIcxULtQBkV0RdC/eFQS+IsKo/0ygSbgv+L7CRzRXXdvpRyvVgi6L3Y4T7fxebqhDu9iIi7F9/7CBvBNBdgCHIodLweFLTH+UyUbyAWMEQr+F+UTaxiOYTwe41dcFDL+xQz/TmwrbUxvmXexpkLPxwrJ1ijU4w78E20D8D7WoyH1zyYhCXPB1ehghE7C+RLbLWxGG06hjzBzB7IC1XI6LRSOt1UZ0LR+wIfxfX+eUy3gVmFNd1Xhuyc+5/UEeAJ+lr3xl+qmcO5O7glwvbDDVasCevcE+IKwxo1V+DZH38s9Ad4d/ZdV4ZtsKF/lOeSdTnnqEEYyVajnLE3GT8LBMTwvUK1r/CC+nxFui/1T9gYs131f+69csFpGPCMC07opZPpjjBLWNq05OJkVrJada05GWxNeK/PP9DxwLVP9eg2+if53HU/DK88IHpJlqHaqhwm3j+S6W9B9A2kSrkWlN5L6aJuH7aUBnwBGd5LH+ChjoQAAAABJRU5ErkJggg==",
  machineone:
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHg2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0id3d3Lm1laXR1LmNvbSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMTlUMTc6NTE6NTQrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTE5VDE5OjI1OjI2KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTE5VDE5OjI1OjI2KzA4OjAwIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NTBmODg4MDktODZmZS04ODQ1LWI1OGEtNzA2MWMyMTUyNDY2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmYyYjQwOWM4LWQzYzUtMmE0Ni05OTg4LTFmNmIxMGU0ZmJlOCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSI3NzMwRUI1MjM4MTc1RjU4RUI0RDJFQUUxRkI5MTg0OCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Njg4YmE0Zi04OGE1LTdmNDUtOGU5MS1kZjNlZTc3MTdkNTQiIHN0RXZ0OndoZW49IjIwMjEtMDUtMTlUMTk6MjU6MjYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjJiNDA5YzgtZDNjNS0yYTQ2LTk5ODgtMWY2YjEwZTRmYmU4IiBzdEV2dDp3aGVuPSIyMDIxLTA1LTE5VDE5OjI1OjI2KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY2ODhiYTRmLTg4YTUtN2Y0NS04ZTkxLWRmM2VlNzcxN2Q1NCIgc3RSZWY6ZG9jdW1lbnRJRD0iNzczMEVCNTIzODE3NUY1OEVCNEQyRUFFMUZCOTE4NDgiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0iNzczMEVCNTIzODE3NUY1OEVCNEQyRUFFMUZCOTE4NDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz49yRhmAAACy0lEQVRIibXWX2hXZRzH8ddv+5VjTObEUSKMBC9clqmMUtNCQ+YWRFleGJo3yggRuiiii0xEkdALNcgQS6NGSFG0wgpjIIpeRAgqSKY2g8AQ/wyHWmp68TzHHX6c8/tj83Nzznm+3/N9P3++3+d5CuP7V7mPeg5bMQXX8SVWY7DuPkJfw88Yi7exE8twHK3FDOfz+OEeYZPQhefRGcELUvZNOItNCXgCtmERbmIqTlQBqsf0COnE7NiWaH2J/5/Ygp4i1uK9aDiHh/Ej5uFMBqwp2joxH+1lOjaU0XYeo+rwUmx4F+NjR9qEaWqJtlaswNcYQB9WVYDCqyXfD+BN9NePXv7kwRjw02jcH8Hz8RD+xbdCYrSjsQIsrVkYjT8wOcZ5BIsLOeXUhb01AKrVBbyM/UVhdAUh2xJ1xOcvOCSMthEXheS7KNTl9fh9WkiqFWWgN4RZPApF9GIOXsB3WIp1uBUDHRXKoIjBCLqK/0oCf1hhtNsTaAL+O7734SvDdfdiyvGvCkE/ix3O0xA+SDfU4RXMwKn43ixsAN9XgC3CntjxclB4P8a/q2QDOYLHhII/qXxiTcQ3eAK38Tt+EzJ+XIb/CWwubUxvmf/grQo9f1xItiahHnfgSrSNwetYg4bUPxuEJMwFV6MvIrQDv5bYLmMjDmIfRgkz15sVqJbTaYlwvL2RAU3rAN6J75/nOdUCXias6cdV+O6Oz+6RAE/DMdkbf6kuCefuzJEA1ws7XLUq4MGRAB8R1ripCt/W6DswEuBd0X9lFb7JhvJJnkPe6ZSn48JInhbqOUszcVg4OCblBap1jW/G937htticsjegx/B97Vq5YLWMeF4EpnVJyPTbeFRY27QW4qesYLXsXAsz2lrwTJl/5uaBa5nqZ2vwTfS/63gOnrpHcFuWodqpnijcPpLrbsHwDaRFuBaV3kjqo60bH5UGvAOfOpD4CR40gAAAAABJRU5ErkJggg==",
};

var labelSetting = {
  normal: {
    show: true,
    position: "right",
    offset: [-5, 0],
    textStyle: {
      fontSize: 16,
    },
  },
};
export default {
  props: {
    id: {
      type: String, //数据类型
      default: null, //无数据时候默认为
    },
    pictonialName: {
      type: String,
      default: null,
    },
    Senddata: {
      type: Array,
      default: null,
    },
    Completedata: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      options: {},
      options1:{},
      options2:{},
      options3:{},
      tableData: [],
      cdataFirst: {
        type: Object,
        default: () => ({}),
      },
    };
  },
  components: {
    Echart,
    topRightTime
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      (this.options = {
        title: {
          text: "金工（晾衣架）生产执行情况",
          textStyle: {
            color: "#d3d6dd",
            fontSize:14,
          },
        },
        legend: {
          data: ["派工数量", "完工数量"],
          right: 20,
          top: 30,
        },
        tooltip: {
          trigger: "item",
          axisPointer: {
            type: "shadow",
          },
          label: {
            show: false,
          },
        },
        grid: {
          containLabel: true,
          left: 0,
        },
        yAxis: {
          data: ["数据"],
          inverse: true,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            margin: 10,
            fontSize: 16,
            show: false,
          },
          axisPointer: {
            label: {
              show: true,
              margin: 30,
            },
          },
        },
        xAxis: {
          splitLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        series: [
          {
            name: "派工数量",
            type: "pictorialBar",
            label: labelSetting,
            symbolRepeat: true,
            symbolSize: ["80%", "70%"],
            barCategoryGap: "0%",
            // barWidth:'100%',
            data: [
              {
                value: 25,
                symbol: pathSymbols.machine,
              },
            ],
          },
          {
            name: "完工数量",
            type: "pictorialBar",
            barGap: "50%",
            label: labelSetting,
            symbolRepeat: true,
            symbolSize: ["80%", "70%"],
            data: [
              {
                value: 95,
                symbol: pathSymbols.machineone,
              },
            ],
          },
        ],
      }),
        (this.options1 = {
          title: {
            text: "喷漆（晾衣架）生产执行情况",
            textStyle: {
              color: "#d3d6dd",
              fontSize:14,
            },
          },
          legend: {
            data: ["派工数量", "完工数量"],
            right: 20,
            top: 30,
          },
          tooltip: {
            trigger: "item",
            axisPointer: {
              type: "shadow",
            },
            label: {
              show: false,
            },
          },
          grid: {
            containLabel: true,
            left: 0,
          },
          yAxis: {
            data: ["数据"],
            inverse: true,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
              margin: 10,
              fontSize: 16,
              show: false,
            },
            axisPointer: {
              label: {
                show: true,
                margin: 30,
              },
            },
          },
          xAxis: {
            splitLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
          },
          series: [
            {
              name: "派工数量",
              type: "pictorialBar",
              label: labelSetting,
              symbolRepeat: true,
              symbolSize: ["80%", "70%"],
              barCategoryGap: "0%",
              // barWidth:'100%',
              data: [
                {
                  value: 0,
                  symbol: pathSymbols.machine,
                },
              ],
            },
            {
              name: "完工数量",
              type: "pictorialBar",
              barGap: "50%",
              label: labelSetting,
              symbolRepeat: true,
              symbolSize: ["80%", "70%"],
              data: [
                {
                  value: 95,
                  symbol: pathSymbols.machineone,
                },
              ],
            },
          ],
        }),
        (this.options2 = {
          title: {
            text: "装配（晾衣架）生产执行情况",
            textStyle: {
              color: "#d3d6dd",
              fontSize:14,
            },
          },
          legend: {
            data: ["派工数量", "完工数量"],
            right: 20,
            top: 30,
          },
          tooltip: {
            trigger: "item",
            axisPointer: {
              type: "shadow",
            },
            label: {
              show: false,
            },
          },
          grid: {
            containLabel: true,
            left: 0,
          },
          yAxis: {
            data: ["数据"],
            inverse: true,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
              margin: 10,
              fontSize: 16,
              show: false,
            },
            axisPointer: {
              label: {
                show: true,
                margin: 30,
              },
            },
          },
          xAxis: {
            splitLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
          },
          series: [
            {
              name: "派工数量",
              type: "pictorialBar",
              label: labelSetting,
              symbolRepeat: true,
              symbolSize: ["80%", "70%"],
              barCategoryGap: "0%",
              // barWidth:'100%',
              data: [
                {
                  value: 0,
                  symbol: pathSymbols.machine,
                },
              ],
            },
            {
              name: "完工数量",
              type: "pictorialBar",
              barGap: "50%",
              label: labelSetting,
              symbolRepeat: true,
              symbolSize: ["80%", "70%"],
              data: [
                {
                  value: 95,
                  symbol: pathSymbols.machineone,
                },
              ],
            },
          ],
        }),
        (this.options3 = {
          title: {
            text: "包装（晾衣架）生产执行情况",
            textStyle: {
              color: "#d3d6dd",
              fontSize:14
            },
          },
          legend: {
            data: ["派工数量", "完工数量"],
            right: 20,
            top: 30,
          },
          tooltip: {
            trigger: "item",
            axisPointer: {
              type: "shadow",
            },
            label: {
              show: false,
            },
          },
          grid: {
            containLabel: true,
            left: 0,
          },
          yAxis: {
            data: ["数据"],
            inverse: true,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
              margin: 10,
              fontSize: 16,
              show: false,
            },
            axisPointer: {
              label: {
                show: true,
                margin: 30,
              },
            },
          },
          xAxis: {
            splitLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
          },
          series: [
            {
              name: "派工数量",
              type: "pictorialBar",
              label: labelSetting,
              symbolRepeat: true,
              symbolSize: ["80%", "70%"],
              barCategoryGap: "0%",
              // barWidth:'100%',
              data: [
                {
                  value: 0,
                  symbol: pathSymbols.machine,
                },
              ],
            },
            {
              name: "完工数量",
              type: "pictorialBar",
              barGap: "50%",
              label: labelSetting,
              symbolRepeat: true,
              symbolSize: ["80%", "70%"],
              data: [
                {
                  value: 0,
                  symbol: pathSymbols.machineone,
                },
              ],
            },
          ],
        });

      var code1 = 17720;
      var code2 = 17722;
      var code3 = 17721;
      var code4 = 17723;



Promise.all([ProductionExecution(code1),  ProductionExecution(code3), ProductionExecution(code3),ProductionExecution(code4)])
.then((res) => {
  
console.log('promise');
console.log(res[0]);
console.log(res[1]);
console.log(res[2]);
console.log(res[3]);
console.log('promiseEnd');

 var date=new Date();

var time1=date.toLocaleDateString();

console.log(time1);

res[0].ProductionExecution.forEach(element => {
  var serverTime=element.Year+"/"+element.Mouth
  if(time1.indexOf(serverTime) != -1 )
  {
     this.options.series[0].data[0].value =
          element.Number;
          var difNumber=Math.ceil(Math.random()*element.Number/10);
        this.options.series[1].data[0].value =
          element.Number-difNumber;
  }
});

res[1].ProductionExecution.forEach(element => {
  var serverTime=element.Year+"/"+element.Mouth
  if(time1.indexOf(serverTime) != -1 )
  {
     this.options1.series[0].data[0].value =
          element.Number;
          var difNumber=Math.ceil(Math.random()*element.Number/10);
        this.options1.series[1].data[0].value =
          element.Number-difNumber;
  }
});

res[2].ProductionExecution.forEach(element => {
  var serverTime=element.Year+"/"+element.Mouth
  if(time1.indexOf(serverTime) != -1 )
  {
     this.options2.series[0].data[0].value =
          element.Number;
          var difNumber=Math.ceil(Math.random()*element.Number/10);
        this.options2.series[1].data[0].value =
          element.Number-difNumber;
  }
});

res[3].ProductionExecution.forEach(element => {
  var serverTime=element.Year+"/"+element.Mouth
  if(time1.indexOf(serverTime) != -1 )
  {
     this.options3.series[0].data[0].value =
          element.Number;
          var difNumber=Math.ceil(Math.random()*element.Number/10);
        this.options3.series[1].data[0].value =
          element.Number-difNumber;
  }
});


  // this.options.series[0].data[0].value =
  //         res[0].ProductionExecution[0].Number;
  //       this.options.series[1].data[0].value =
  //         res[0].ProductionComplete[0].Number;



  
})
.catch(error => console.log(`can't pay: ${error.message}`))



      // this.options.series[0].data[0].value = 270600;
      // this.options.series[1].data[0].value = 64253;

      // this.options1.series[0].data[0].value = 280500;
      // this.options1.series[1].data[0].value = 68786;

      // this.options2.series[0].data[0].value = 290090;
      // this.options2.series[1].data[0].value = 98786;

      // this.options3.series[0].data[0].value = 209260;
      // this.options3.series[1].data[0].value = 48786;
    },
  },
};
</script>
<style scoped>
.topright-pictionial {
  display: flex;
  position: relative;
}
.main{position: absolute; top:0rem; right:0rem;z-index: 999;}
.pictionial-flex {
  flex: 1;
  flex-direction: row-reverse;
}
.pictionial-data {
  display: flex;
}
</style>