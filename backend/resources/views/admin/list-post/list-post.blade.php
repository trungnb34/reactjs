@extends('admin.layout.layout')
@section('content')
<section class="content-header">
    <h1>
        Data Tables
        <small>advanced tables</small>
    </h1>
</section>
<section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Hover Data Table</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>Tiêu đề</th>
                  <th>Tác giả</th>
                  <th>Danh mục</th>
                  <th>Thẻ</th>
                  <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                @foreach($posts as $post)
                  <tr>
                    <td>{{ $post->title }}</td>
                    <td>{{ $post->userName }}</td>
                    <td>
                      <ul>
                        @foreach($post->categorys as $cate)
                          <li>{{ $cate->name }}</li>
                        @endforeach
                      </ul>
                    </td>
                    <td>
                      <ul>
                        @foreach($post->tag as $tag)
                          <li>{{ $tag->name }}</li>
                        @endforeach
                      </ul>
                    </td>
                    <td style="width: 250px">
                        <a href="{{ url('/detail/' . $post->slug) }}" class="btn bg-orange btn-flat margin">detal</a>
                        <a href="{{ url('/edit/' . $post->slug) }}" class="btn bg-olive btn-flat margin">edit</a>
                        <a href="{{ url('/delete/' . $post->slug) }}" onclick="!confirm('Bạn có muốn xóa bài viết')" class="btn bg-maroon btn-flat margin">delete</a>
                    </td>
                  </tr>
                @endforeach
                </tbody>
                <tfoot>
                <tr>
                  <th>Tiêu đề</th>
                  <th>Tác giả</th>
                  <th>Danh mục</th>
                  <th>Thẻ</th>
                  <th>Thao tác</th>
                </tr>
                </tfoot>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        <nav aria-label="Page navigation example col-sm-offset-9 col-sm-3" style="float: right">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                @for($i = 0; $i < $count; $i++)
                    <li class="page-item"><a class="page-link" href="{{ url('/list-post/' . ($i + 1) ) }}">{{ $i + 1 }}</a></li>
                @endfor
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
          <!-- /.box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
@endsection