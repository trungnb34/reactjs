@extends('admin.layout.layout')
@section('css')
    <link rel="stylesheet" href="{{ asset('bower_components/select2/dist/css/select2.min.css') }}">
@endsection
@section('content')
    <section class="content-header">
        <h1>
            Bài viết
            <small>Sửa bài viết</small>
        </h1>
    </section>
    <!-- Main content -->
    <section class="content">
        <div class="row">
            <form method="post" enctype="multipart/form-data">
                {!! csrf_field() !!}
                <div class="col-md-8">
                    <div class="box box-info">
                        <div class="box-header" style="height: 55px">
                            <h3 class="box-title"><i class="fa fa-pencil" style="margin-right: 8px" aria-hidden="true"></i><span>Tiêu đề</span>
                            </h3>
                            <hr />
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body pad">
                            <div class="form-group">
                                <label class="control-label">Tiêu đề</label>
                                <div class="col-sm-12" style="padding-left: 0px; padding-right: 0px; margin-bottom: 10px">
                                    <input type="text" name="title" class="form-control" id="inputName" value="{{ $post->title }}" placeholder="Name">
                                    {{--<input type="hidden" name="slug" class="form-control" id="" value="{{ $post->slug }}" placeholder="Name">--}}
                                    <strong style="color: red" class="error">{{ $errors->first('title') }}</strong>
                                </div>
                            </div>
                            <div class="form-group" style="margin-top: 10px">
                                <label for="inputExperience" class="control-label">Trích đoạn</label>
                                <div class="col-sm-12" style="padding-left: 0px; padding-right: 0px">
                                    <textarea class="form-control" name="abstract" id="inputExperience" placeholder="Experience">{{ $post->abstract }}</textarea>
                                    <strong style="color: red" class="error">{{ $errors->first('abstract') }}</strong>
                                </div>
                            </div>
                        </div>
                        <div class="box-body pad">
                            <label class="control-label">Nội dung</label>
                            <textarea id="editor2" name="contentText" rows="10" cols="80">{{ $post->content }}</textarea>
                            {{--<textarea id="editor1" name="contentText" rows="10" cols="80">{{ $post->content }}</textarea>--}}
                            <strong style="color: red" class="error">{{ $errors->first('contentText') }}</strong>
                        </div>
                    </div>
                    <!-- /.box -->
                </div>
                <div class="col-md-4">
                    <div class="box box-info">
                        <div class="box-header">
                            <h3 class="box-title"><i class="fa fa-pencil" style="margin-right: 8px" aria-hidden="true"></i><span>Sửa bài</span>
                            </h3>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body pad">
                            <div class="form-group">
                                <div class="col-sm-offset-9 col-sm-3">
                                    <button type="submit" class="btn btn-danger" style="background: #159077; border-color: #159077">Lưu</button>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Trạng Thái</label>
                                <select class="form-control select2" name="status" style="width: 100%;">
                                    <option value="1" selected="selected">Bản nháp</option>
                                </select>
                                {{--<strong style="color: red" class="error">{{ $errors->first('status') }}</strong>--}}
                            </div>
                            <div class="form-group">
                                <label>Danh mục</label>
                                <select class="form-control select3" name="category[]" multiple="multiple" data-placeholder="Select a category"
                                        style="width: 100%;">
                                    @foreach($categorys as $cate)
                                        <option value="{{ $cate->id }}" @foreach ($post->categorys as $category) @if($category->id == $cate->id) {{ "selected" }} @endif  @endforeach>{{ $cate->name }}</option>
                                    @endforeach
                                </select>
                                <strong style="color: red" class="error">{{ $errors->first('category') }}</strong>
                            </div>
                            <div class="form-group">
                                <label>Thẻ</label>
                                <select class="form-control select3" name="tag[]" multiple="multiple" data-placeholder="Select a tag"
                                        style="width: 100%;">
                                    @foreach($tags as $tag)
                                        <option value="{{ $tag->id }}" @foreach ($post->tag as $tagRes) @if($tagRes->id == $tag->id) {{ "selected" }} @endif  @endforeach>{{ $tag->name }}</option>
                                    @endforeach
                                </select>
                                <strong style="color: red" class="error">{{ $errors->first('tag') }}</strong>
                            </div>
                            <div class="form-group">
                                <label>Đóng/mở bình luận</label>
                                <select class="form-control" name="isOpen">
                                    <option value="1" {{ $post->isOpenComment == 1 ? "selected" : "" }}>Open</option>
                                    <option value="0" {{ $post->isOpenComment == 0 ? "selected" : "" }}>Close</option>
                                </select>
                                <strong style="color: red" class="error">{{ $errors->first('status') }}</strong>
                            </div>
                            <div class="form-group">
                                <label>Ảnh đại diện</label>
                                <div class="avatar" style="width: 100%; height: 180px; border: 1px solid #ddd">
                                    <img src="{{ $post->avatar }}" id="imgShow" alt="" style="width: 100%; height: 100%">
                                </div>
                            </div>
                            <div class="form-group col-sm-5" style="padding: 0px">
                                <label for="chooseImage">Chọn ảnh</label>
                                <input type="file" name="image" accept="image/gif, image/jpeg, image/png" class="form-control-file" id="chooseImage">
                                <strong style="color: red" class="error">{{ $errors->first('image') }}</strong>
                            </div>
                        </div>
                    </div>
                    <!-- /.box -->
                </div>
            </form>
            <!-- /.col-->
        </div>
        <!-- ./row -->
    </section>
@endsection
@section('javascript')
    <script src="{{ asset('bower_components/ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('bower_components/select2/dist/js/select2.full.min.js') }}"></script>
    <script src="{{ asset('bower_components/ckfinder/ckfinder.js') }}"></script>
    <script src="{{ asset('js/selectImagePost.js') }}"></script>
    <script>
        $('#chooseFile').click(function() {
            selectFileWithCKFinder('chooseFile');
        });
        function selectFileWithCKFinder( elementId ) {
            CKFinder.modal( {
                chooseFiles: true,
                width: 1000,
                height: 600,
                onInit: function( finder ) {
                    finder.on( 'files:choose', function( evt ) {
                        var file = evt.data.files.first();
                        var output = document.getElementById( elementId );
                        output.value = file.getUrl();
                    } );

                    finder.on( 'file:choose:resizedImage', function( evt ) {
                        var output = document.getElementById( elementId );
                        output.value = evt.data.resizedUrl;
                    } );
                }
            } );
        }
        $(function () {
            CKEDITOR.replace('editor2', {
                filebrowserBrowseUrl : '/bower_components/ckfinder/ckfinder.html',
                filebrowserImageBrowseUrl : '/bower_components/ckfinder/ckfinder.html?type=Images',
                filebrowserFlashBrowseUrl : '/bower_components/ckfinder/ckfinder.html?type=Flash',
                filebrowserUploadUrl : '/bower_components/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
                filebrowserImageUploadUrl : '/bower_components/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
                filebrowserFlashUploadUrl : '/bower_components/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'
            });
            //bootstrap WYSIHTML5 - text editor
            $('.textarea').wysihtml5()
        });
        $('.select3').select2();
    </script>
@endsection