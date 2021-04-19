
     <template>
  <div style="float: right">
    <button data-toggle="modal" data-target="#myModal" class="btn btn-danger">
      <i class="fa fa-eye"></i>Ön İzle
    </button>
    <div class="container">
      <div class="modal" id="myModal">
        <div style=" margin:10%">
          <div class="modal-content" style="height:120vw;">
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Epsilon Arge</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <!-- Modal body -->
            <div style="height: 90%">
              <slot></slot>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
